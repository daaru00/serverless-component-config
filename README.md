# Config for Serverless Components

This component stores project's sharing configs and retrieve them via component outputs.

## Before Starting

This repository is not part of official [Serverless Components repository](https://github.com/serverless/components).
This is an experimental component built following "Building Components" section guide.

## Getting Started

For more information about Serverless Components follow [official guide](https://github.com/serverless/components).

### 1. Install

To get started with component, install the latest version of the Serverless Framework:

```
$ npm install -g serverless
```

### 2. Credentials

Create a new `.env` file in the root of the `config` directory right next to `serverless.yml`, and add your AWS access keys:

```
# .env
AWS_ACCESS_KEY_ID=XXX
AWS_SECRET_ACCESS_KEY=XXX
```

### 3. Configure

Here's a complete reference of the `serverless.yml` file for the `config` component:

```yml
# serverless.yml

component: config                # (required) name of the component. In that case, it's config.
name: shared-config              # (required) name of your component instance.
org: daaru                       # (optional) serverless dashboard org. default is the first org you created during signup.
app: myApp                       # (optional) serverless dashboard app. default is the same as the name property.
stage: dev                       # (optional) serverless dashboard stage. default is dev.

inputs:
  foo: bar
  foo1:
    bar1: foo
  bar:
    - foo1
    - foo2
```

### 4. Deploy

Once you have the directory set up, you're now ready to deploy. Just run the following command from within the directory containing the `serverless.yml` file:

```
$ serverless deploy
```

Your first deployment might take a little while, but subsequent deployment would just take few seconds. For more information on what's going on during deployment, you could specify the `--debug` flag, which would view deployment logs in realtime:

```
$ serverless deploy --debug
```

### 5. Info

Anytime you need to know more about your created `config` component, you can run the following command to view the most info. 

```
$ serverless info
```

### 6. Remove

If you wanna tear down your entire `config` component that was created during deployment, just run the following command in the directory containing the `serverless.yml` file. 
```
$ serverless remove
```
