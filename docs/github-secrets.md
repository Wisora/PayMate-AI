# PayMate AI GitHub Secrets

To enable the CI/CD pipeline, configure the following secrets in your GitHub repository:

## Firebase

- `FIREBASE_TOKEN`: For deploying to Firebase Hosting.
- `FIREBASE_SERVICE_ACCOUNT`: For backend integration tests.

## Cloud Providers (Azure/AWS)

- `AZURE_CREDENTIALS`: For deployment to Azure App Service.
- `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY`: For deployment to AWS Elastic Beanstalk or Lambda.

## Testing

- `GEMINI_API_KEY`: For Vertex AI validation tests.
- `STRIPE_TEST_SECRET`: For payment integration tests.

## Security

- `JWT_SECRET`: Used for signing session tokens in the test environment.
