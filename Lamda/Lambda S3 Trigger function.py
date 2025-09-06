import json
import boto3
import os

def lambda_handler(event, context):
    print("Received event:", json.dumps(event, indent=2))
    
    try:
        bucket = event['Records'][0]['s3']['bucket']['name']
        key = event['Records'][0]['s3']['object']['key']
    except Exception as e:
        print("Error parsing S3 event:", str(e))
        return {
            'statusCode': 500,
            'body': json.dumps('Error reading S3 event')
        }

    # ✅ Prevent infinite loop: skip files already cleaned
    if key.startswith("cleaned-output/"):
        print(f"Skipping cleaned file: {key}")
        return {
            'statusCode': 200,
            'body': json.dumps(f"Skipped cleaned file: {key}")
        }

    glue = boto3.client('glue')

    # ✅ Step 1: Start Glue Crawler
    crawler_name = os.environ.get("GLUE_CRAWLER_NAME", "nexus-crawler")
    try:
        glue.start_crawler(Name=crawler_name)
        print(f"Started crawler: {crawler_name}")
    except glue.exceptions.CrawlerRunningException:
        print(f"Crawler '{crawler_name}' is already running.")
    except Exception as e:
        print("Error starting crawler:", str(e))

    # ✅ Step 2: Start Glue Job with S3 input argument
    glue_job_name = os.environ.get("GLUE_JOB_NAME", "csv-cleaning-job")
    try:
        glue.start_job_run(
            JobName=glue_job_name,
            Arguments={
                '--S3_INPUT_FILE': f"s3://{bucket}/{key}"
            }
        )
        print(f"Started Glue job: {glue_job_name}")
    except Exception as e:
        print("Error starting Glue job:", str(e))

    return {
        'statusCode': 200,
        'body': json.dumps(f"Glue crawler and job triggered for {key}")
    }
