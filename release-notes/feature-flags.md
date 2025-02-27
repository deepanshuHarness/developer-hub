---
title: Feature Flags release notes
sidebar_label: Feature Flags
date: 2023-04-22T10:00
tags: [NextGen, "feature flags"]
sidebar_position: 6
---
```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

Review the notes below for details about recent changes to Harness Feature Flags, NextGen SaaS. For release notes for Harness Self-Managed Enterprise Edition, go to [Self-Managed Enterprise Edition release notes](/release-notes/self-managed-enterprise-edition).

:::info note
Harness deploys updates progressively to different Harness SaaS clusters. You can identify the cluster hosting your account in your Account Overview page. The features and fixes in the release notes may not be available in your cluster immediately.
:::

## Latest - April 22, 2023

```mdx-code-block
<Tabs>
  <TabItem value="What's new">
```

This release does not include new features.

```mdx-code-block
  </TabItem>
  <TabItem value="Early access">
```

This release does not include early access features.

```mdx-code-block
  </TabItem>
  <TabItem value="Fixed issues">
```

#### Feature Flags UI

* Fixed an issue where the metrics loading spinner was hanging indefinitely. (FFM-6735)

* Updated the field validation for the **YAML path** field in the Git connection form to prevent entering invalid path names beginning with `./`. (FFM-7448)

```mdx-code-block
  </TabItem>
</Tabs>
```

## Previous releases

<details>
<summary>2023 releases</summary>

#### Latest - April 11, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

#### Fixed issues

##### Feature Flags UI

Fixed an issue where users with reduced access could not create Feature Flags SDK Keys as a result of a permission mismatch between the frontend and backend. (FFM-7295)

#### April 10, 2023

##### What's new

* The UI now provides improved RBAC messaging when trying to toggle or edit a flag in an environment without the correct permissions. (FFM-7234)

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flags server

The **FF server** has been updated to version **1.1007.0** with the following updates.

* Previously, the number of flags returned in the **Target Management** page was capped at 100.  This change lets Harness show all flags even if the number is greater than 100. (FFM-7457)
* Feature Flag identifiers now follow the same guidelines as the Harness Platform entities. This means they can include a `$` in the name. (FFM-7436)
* Previously, FF was only checking permissions at the account and project level. With this update, permissions and roles assigned at the organization level will also be honored. (FFM-7376)


#### April 5, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flags SDKs

* The **Python** server SDK has been updated to version **1.1.10** with the following update.
  * The SDK now logs an error if an evaluation fails and the default variation is returned. (FFM-7360)

* The **Ruby** server SDK has been updated to version **1.1.0** with the following updates.
  * Metrics counters are now stored in a map, instead of a queue, for more efficient memory usage. The metric payload size should now also be smaller, resulting in more efficient network bandwidth usage. (FFM-7285)
  * Improved the authentication retry logic to only retry on certain HTTP codes. Certain error codes will be treated as transient and others not. Ensured that while the SDK is authenticating, default values are served. (FFM-7325)
  * Added a Ruby on Rails example in the SDK [repository](https://github.com/harness/ff-ruby-server-sdk). (FFM-6926)
  * Disabling the metrics processor didn't disable entries being written to the queue, causing an eventual memory leak. This fix corrects this behavior. (FFM-6965)
  * Added TLS support to the SDK and updated the documentation in the SDK [repository](https://github.com/harness/ff-ruby-server-sdk).

#### April 4, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flags SDKs

The **Node.js** server SDK was updated to version **1.2.15** with the following update.

* Occasionally, the retry strategy could open several event streams at once if the application disconnected intermittently. This issue has been fixed and the SDK opens only one stream when the EventSource library reconnects. (FFM-7412)
* The EventSource library was updated to version 2.1.4. (FFM-7421)

#### March 30, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flags server

The **FF server** has been updated to version **1.979.0**, with the following update.

* Before this update, targets never expired. Now, targets expire if they have not been updated for 60 days, except when used in flag rule, or when part of a target group's include/exclude lists. For more information, go to [How targets expire](/docs/feature-flags/ff-using-flags/ff-target-management/add-targets#how-targets-expire).

###### Feature Flags SDKs

* The **Java server SDK** has been updated to version **1.2.2**, with the following updates.

  * Minor internal changes were made to make it easier for developers to use classes that were previously marked private.

* The **Go server SDK** has been updated to version **0.1.8** with the following update.

  * Previously, a few logs on startup would use fmt.Println() instead of using the custom logger passed in via harness.WithLogger(logger). This could cause these startup logs to be in a different format, and appear to be logged at an `error` level instead of logged correctly as `debug`. This has been resolved and all logs emitted by the SDK now go through the custom logger if it's passed in. (FFM-7347)

#### March 29, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flags SDKs

The **Go server SDK** has been updated to version **0.1.7**, with the following updates.

* Previously if a custom logger was passed in to the SDK through the harness.WithLogger(logger) function, the custom logger was not used when logging HTTP requests. This could cause HTTP request logs to be in a different format, and appear to be logged at an `error` level instead of correctly logged `debug`. This has been resolved, and all logs emitted by the SDK now go through the custom logger if it's passed in. (FFM-7327)

* Added a flag code cleanup example and some information on how to run the example in the [Go SDK repository](https://github.com/harness/ff-golang-server-sdk). (FFM-6794)

* Added documentation in the [Harness flag_cleanup repository](https://github.com/harness/flag_cleanup) on how to clean up flags automatically using Harness pipelines. (FFM-6796)


#### March 28, 2023

##### What's new

The [**Erlang server SDK**](/docs/feature-flags/ff-sdks/server-sdks/erlang-sdk-reference), which was in Beta, has been released as GA with version **1.0.0**. This release includes the following updates.

* **Breaking changes**

  - Changes to mulit-instance behavior. Go to the [Readme](https://github.com/harness/ff-erlang-server-sdk#run-multiple-instances-of-the-sdk) for updated instructions and code samples for the following:
    - If you define a multi-instance configuration, and one of the instances (including the default instance) fails to authenticate, then the other instances do not attempt to start, and the SDK does not boot.
    - You can choose not to start the default instance.

* **Enhancements**
  - The SDK is now available on [hex.pm](https://hex.pm/).
  - Improved logging for debugging purposes

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flags SDKs

The **Erlang server SDK** was released as GA, version **1.0.0**, and includes the following bug fix:

* There was an issue in multi-instance functionality that prevented users from starting up multiple instances. This issue has been fixed. (FFM-7187)

#### March 23, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flags SDKs

The **Node.js server SDK** has been updated to version **1.2.14** with the following updates:

* The EventSource library was updated to version 2.1.3. (FFM-7198)
* On streaming errors, the error was not included in the `retrying` event payload. This fix adds the error to the payload. (FFM-7198)
* Checks were added to see if errors are eligible for retries, and if not, the SDK stops retrying. (FFM-7198)
* The SDK now logs each retry. This ensures the most recent error is logged if errors change during retries. (FFM-7198)


#### March 23, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flags SDKs

The **Node.js server SDK** has been updated to version **1.2.13** with the following update:

* A race condition during initialization could cause some flag evaluation calls (when called immediately after calling waitForInitialization) to return the default value instead of the actual evaluated value. This issue has been fixed. (FFM-7289) 


#### March 21, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flags server

The **FF server** has been upated to version **1.968.0** and includes the following updates:

* When searching for a flag, the search filter sometimes failed if the flag description was null rather than empty. This issue has been fixed. (FFM-7213)
* When using GitSync to save a flag with a floating point value, the feature flag service generated an error.
The service now correctly handles floating point numbers saved from Git. (FFM-7118)


#### March 16, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flags SDKs

The **Java server SDK** has been updated to version **1.2.1** and includes the following update:

* When an SDK key was not supplied, the SDK continually retried. This issue was fixed and now, if authentication fails, the SDK no longer retries constantly, and instead generates a MissingSdkKeyException. (FFM-7214)


#### March 15, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flags SDKs

The **Node.js server SDK** has been updated to version **1.2.12** and includes the following update:

* The event source was updated to version 2.1.2. This adds eligible errors to the `retrying` event payload. (FFM-7198)

#### March 09, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flags SDKs

The **Java server SDK** has been updated to version **1.2.0** and includes the following updates:

* Improved support for TLS allows custom CA certificates to be provided. (FFM-7004)
* A new HTTP header, `Harness-SDK-Info`, was added. This header helps the Feature Flag service identify connected client SDKs apart from server SDKs. (FFM-7038)
* Error handling for invalid SDK keys has been improved. (FFM-6964)

#### March 08, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flags UI

- Onboarding examples displayed a flag name instead of the required flag identifier. This issue is now fixed. (FFM-6921)

#### March 02, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flag SDKs

The **Node.js server SDK** has been updated to version **1.2.11** and includes the following updates:

- All three retry strategies no longer fire off their initial retry at the same time. (FFM-7002)
- The eventsource library now closes correctly if `eventsource.close` is called while it's in a RETRYING state. (FFM-7002)
- The SDK no longer retries on 40x errors. It now only retries on 50x and I/O errors. (FFM-7002)


#### February 24, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flag SDKs

The **Node.js server SDK** has been updated to version **1.2.10** and includes the following updates:
- The Node.js SDK uses the eventsource library. **In rare cases**, an issue occurred when a 500 response was received from the remote system, the connection seemed to close and stop retrying. However, if it received an unspecified error, for example if the endpoint doesn’t exist or goes down suddenly, or if the remote system closed the connection, then the SDK tried to connect to the /stream endpoint every second, forever. This issue was resolved with the following updates:

  - The SDK now falls back to polling if the stream disconnects. (FFM-4204)
  - The SDK attempts to reconnect on retryable errors using an exponential backoff and retry strategy provided by the Harness fork of eventsource. (FFM-4204)
  - A new retry event is emitted so the SDK can log the current retry attempt. (FFM-4204)

#### February 21, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flag SDKs

The **Python server SDK** has been updated to version **1.1.9** and includes the following update:
* SSE updates were stopping due to a lost connection. Now, the SSE connection is reestablished if it drops. (FFM-6932) 

#### February 15, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flag SDKs

The **.NET server SDK** has been updated to version **1.1.7** and includes the following updates:

* The default poll interval was corrected from 20 seconds to 60 seconds, consistent with the other SDKs. (FFM-3691)
* The SSE EventSource was not detecting that a connection may have dropped. The SDK will now reconnect correctly if it loses its connection to the stream endpoint. (FFM-6877)

#### February 9, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flag SDKs

- The **Flutter client SDK** has been updated to version **1.0.10** and includes the following updates:
  - This SDK now uses Android SDK 1.0.20. (FFM-6822)
  - This update fixes excessive network calls when calling flag evaluation functions. (FFM-6822)

- The **Python server SDK** has been updated to version **1.1.8** and includes the following updates:
  - Added `wait_for_initialization` to the client API, which can be called to block the thread until all groups and flags have been retrieved and loaded into the cache. (FFM-6549)
  - Added `is_initialized` to the client API, which can be called at any time to check if the initial retrieval and caching of groups and flags has been completed. (FFM-6549)

  :::info note
  For an example usage of `wait_for_initialization` go to [the SDK's repository](https://github.com/harness/ff-python-server-sdk/blob/main/examples/wait_for_initialization_example/wait_for_initialization.py).
  :::


#### February 6, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues
###### Feature Flags UI

* The **Complete** button at the end of the onboarding flow was always enabled. Now, it is disabled until the user receives a successful evaluation. (FFM-5987)

###### Feature Flag SDKs

The **Python SDK** has been updated to version **1.1.7** and includes the following new feature:

* When adding targets to a group based on conditions, the `in` operator is now case-sensitive in the SDK. (FFM-5991)

  :::info note 
  If you are targeting any groups using the `in` operator, ensure that your target condition takes into account the case sensitivity of the operator.
  :::

#### January 27, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flag SDKs

The **Java server SDK** has been updated to version **1.1.11** and includes the following changes:

- Timeout errors were logged due to the code calling `awaitTermination()` before `shutDown()` when stopping the update processor. There was also a misleading warning about the poller not being restarted. These issues have been fixed. (FFM-6581)


#### January 26, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues
###### Feature Flag SDKs
- The **React client SDK** has been updated to version **1.1.0** and includes the following changes:
  - You can now listen for errors that are caused by network issues. For more information about this, go to [the SDK's readme file.](https://github.com/harness/ff-react-client-sdk/blob/main/README.md) (FFM-6578)
  - You can now provide the SDK with a set of evaluations that it can serve instantly upon initialization. For more information about this, go to [the SDK's readme file.](https://github.com/harness/ff-react-client-sdk/blob/main/README.md) (FFM-6578) 

- The **Javascript client SDK** has been updated to version **1.8.0** and includes the following change:
  - You can now provide the SDK with a set of evaluations that it can serve instantly upon initialization. For more information about this, go to [the SDK's readme file.](https://github.com/harness/ff-javascript-client-sdk/blob/main/README.md) (FFM-6489)

- The **Android client SDK** has been updated to version **1.0.19** and includes the following changes:
  - A new event was added, `SSE_RESUME`, which fires if the application loses and regains internet.  When the event fires: 
    - The SDK internally reloads all feature config into cache. (FFM-6574)
    - Applications can listen to this event to ensure event listeners don't miss any streamed events during periods of downtime.

#### January 25, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flag SDKs

The **Go server SDK** has been updated to version **0.1.6** and includes the following update:
* Some target segment include rules were not working for numeric values. This issue has been fixed. (FFM-6384)

#### January 24, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues
###### Feature Flag SDKs
- The **Android client SDK** has been updated to version **1.0.18**. This fixes a bug that caused unhandled exception errors due to duplicate callbacks during the SDK initialization. (FFM-6395)
- The **Flutter client SDK** has been updated to version **1.0.8**. This includes the following:
  - Fixed a bug that caused applications to shut down in response to API errors caused by no internet connection. (FFM-6395)
  - Fixed a bug that caused streaming to stop working if internet connectivity was lost. (FFM-6395) 

#### January 23, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues
###### Feature Flag SDKs
- The **Javascript SDK** has been updated to version **1.7.0**. This fix adds the `Harness-AccountID` and `Harness-EnvironmentID` fields to the HTTP request header in all calls after the initial authorization request. These values are extracted from the JWT, so you don't need to add a value for them. (FFM-6507)

- The **Android client SDK** has been updated to version **1.0.17**. This includes the following changes:
  - Fixed a bug that caused a 401 error when the SDK tried to send a request to the `stream` endpoint if the request was to a non-production environment. (FFM-4603)
  -   Fixed a bug that caused the SDK to stop working if an identifier isn't provided during the SDK initialization. The SDK will now use the name if you don't provide an identifier. You will receive an error if you don't provide either a name or identifier as at least one of these is required for all client-side SDKs. (FFM-6396)

#### January 21, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flags authentication service

The Feature Flags authentication service has been updated to version 1.0.6 with the following update:

* The authentication service was logging warnings as it tried to authenticate with each cluster in turn. This could produce warnings even when authentication was eventually successful. Now, if authentication is successful, no warnings are logged. (FFM-6557)

#### January 19, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues
###### Feature Flags SDKs
- The **Javascript client SDK** has been updated to version **1.6.0**. This includes the following changes:
  - You can now customise the interval of how often metrics data is sent to the metrics endpoint. (FFM-6498)
  - If the metrics data is not successfully posted to the endpoint after two attempts, the data is cleared to ensure the metrics data doesn't get too large and cause performance issues. (FFM-6509)

- The **Java server SDK** has been updated to version **1.1.10**. This includes the following changes:
  -  Improvements to how the metrics endpoint processes platform targets. (FFM-6392)
  -  Fixed a bug that caused an error due to incompatibility with an older version of OkHttp. (FFM-6442)
  
- The **Ruby server SDK** has been updated to version **1.0.6**. This fixes dependency issues with OpenAPI that caused errors when trying to initialize the SDK. (FFM-6523)

#### January 17, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues
###### Feature Flags UI

* If you changed the environment, and then opened the **Pipeline** tab or **Environment** tab on a second screen, the environment you set defaulted to the original one. This has been fixed and the environment you select is consistent through all tabs. 


#### January 10, 2023

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues
###### Feature Flags UI

- Fixed a bug that prevented a completion tick from appearing in the UI after an evaluation had successfully passed. (FFM-6127)

- Fixed an error that caused the Complete button at the end of the Get Started flow to link to the beginning of the flow instead of linking to the expected Feature Flag list page. (FFM-5988)

- Resolved an issue that caused you to scroll unnecessarily when you expanded the target attribute or operator dropdown menus when creating a target. (FFM-5187)

- Fixed a bug where scrollbars were unnecessarily displayed in the target groups section of the targets page during loading. (FFM-4053)

###### Feature Flag SDKs

* The **Ruby server SDK** has been updated to version **1.0.5**. This fixes a bug that caused the SDK to not wait for initialization when using the `wait_for_initialization` method. (FFM-6393)

</details>

<details>
<summary>2022 releases</summary>

#### December 22, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues
###### Feature Flags UI

* Resolved an issue that caused the edit section of a pipeline not to load on the Feature Flag module. (FFM-5948)

#### December 15, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flags SDKs

The Java server SDK has been updated to version 1.1.9 and includes the following update:

* A NullPointerException was thrown when a null target was given. This update fixes the MetricsProcessor to handle nulls correctly. (FFM-6125)

#### December 13, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

**Feature Flags UI**

* Fixed a bug where target names were labelled "UNDEFINED" on the Harness UI if the name contained spaces. (FFM-5866)

**FF SDKs**

The Python SDK has been updated to version 1.1.5. This includes the following changes:

- Fixed a bug where only one target was registered as a metric when multiple, unique targets evaluations were made. (FFM-5995)

- Fixed a bug that caused an error the first time a metrics request was sent. (FFM-5995)

#### December 7, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

**Feature Flags UI**

- Fixed a UI bug where the dialog box during the flag creation was shorter in length than it should be. (FFM-5509)

- Resolved an issue that caused flag lists to load slowly. (FFM-5507)

- Fixed a bug that caused flag pipeline stages to continue to run even if previous stages had failed. (FFM-5289)

- Fixed a minor UI bug where the back and next buttons during the Get Started flow were pushed out of the browser view. (FFM-5086)

- Resolved a minor UI bug that caused the empty state image in the Feature Flags landing page to be incorrectly aligned. (FFM-3839)

**Feature Flag SDKs**

The Java SDK has been updated to version 1.1.8. This version includes the following changes:

- Added a check to ensure the correct variations are served when a flag has nested prerequisite flags. (FFM-5306)
- Fixed a bug where the Target ID set by the customer was being overwritten and set to the default value. (FFM-5471)
- Fixed an issue with our internal dependencies that prevented the Java SDK version 1.1.7 from initializing. (FFM-5944)

#### December 1, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

**Feature Flag SDKs**

- The .NET SDK has been updated to version 1.1.6. This adds a check to ensure the correct variations are served when a flag has nested prerequisite flags. (FFM-5307)

- The Python SDK has been updated to version 1.1.4. This includes the following changes:

  - Added a check to ensure the correct variations are served when a flag has nested prerequisite flags. (FFM-5263)
  - Fixed a bug where requests continuously repeated themselves when using the SDK's streaming mode. (FFM-5352)

#### November 30, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flags SDKs

The .NET server SDK has been updated to version 1.1.6 with the following update:

* When a flag depended on a prerequisite flag being true, the evaluation failed if the prerequisite flag's variation `value` and `identifier` were identical. This issue has been fixed and the evaluation now works correctly in that case. (FFM-5307)


#### November 29, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

**Feature Flags UI**

- Minor UI bug resolved in which buttons for creating Flags were sometimes pushed out of the browser view. (FFM-5336)

- Added a warning that Flag Variation names cannot contain only numerical characters. (FFM-4581)

- Resolved an issue where the Getting Started flow was inadvertently showing only Xamarin instructions in some cases. (FFM-5203)

**Feature Flag SDKs**

The Android SDK has been updated to version 1.0.14. This update fixes a bug that prevented metric data from appearing in the UI.

#### November 21, 2022

##### What's new

A new React Client SDK has been released for Feature Flags as version 1.0.0. To read more about this SDK, see the Reference Guide and the GitHub repository.

##### Early access

This release does not include early access features.

##### Fixed issues

**Feature Flag SDKs**

- The Ruby SDK has been updated to version 1.0.3. This fixes the following issues:

  - The SDK is now compatible with Ruby 2.6. (FFM-5354)
  - Some JSON was being incorrectly rendered in Flag responses. This has been fixed and responses are in the correct format. (FFM-4755)
  - When using a prerequisite Flag, if the identifier and value were not identical, the wrong value for the original Flag was returned. Now, the correct value is returned. (FFM-5355)
  - Target groups were storing data incorrectly due to an incorrect variable, the variable has now been fixed and data is stored correctly. (FFM-4058)

#### November 11, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

**Feature Flags UI**

* When submitting an invalid YAML file for Feature Flag steps in a Pipeline, you now receive an error describing why the YAML is invalid. Previously the incorrect YAML was accepted and only showed a general error during pipeline execution. (FFM-4557)

**Feature Flag SDKs**

- The Java SDK has been updated to version 1.1.6.0. This fixes the following issues:

  - A bug where sometimes the SDK was not closed before making a new request. (FFM-3246)

  - Previously when setting metrics to false, the metrics weren't posted but continued to queue. This has been fixed so that they don't queue, therefore saving memory. (FFM-3694)

  - The Java SDK previously took the first value for Flag rules, instead of cycling through all the rules, so the Flag was not evaluated as expected. This issue has been resolved and the SDK now successfully goes through and evaluates the list of rules for the IN clause. (FFM-4744)

  - A thread leak was fixed for the metrics processor. (FFM-4849)

  - Previously the OR and AND operators for Target Group attribute rules were both treated as AND operators. Now, the OR operator works correctly. (FFM-4808)

  - An inconsistency in the percentage distribution of multivariate Flags has been fixed, so the percentages now work correctly. (FFM-4830)

#### November 6, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

**Feature Flags UI**

- Added validation messages to Flag pipelines to ensure you know which fields must be completed for your pipeline to run successfully. (FFM-3176)

- Fixed a bug that was causing some failure strategies not to show on Feature Flag Pipeline stages. (FFM-4844)

**Feature Flag SDKs**

The Android SDK has been updated to 1.0.13.

* This fixes a bug where metric data was not showing in the UI.

#### October 31, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

- **Javascript SDK**

  The Javascript SDK has been updated to 1.4.14.

  This fixes a bug to ensure that Target identifiers are sent as a string before authorization, to prevent authorization errors. (FFM-5104)

- **.NET SDK**

  The .NET SDK has been updated to 1.1.5.

  The SDK will now print debug logs for analytics to the console. (FFM-4835)

- **Java SDK**

  The Java SDK has been updated to 1.1.5.3. This fixes the following bugs:

  - OR conditions being incorrectly treated as AND conditions. (FFM-4808)

  - Multivariate Flags using percentage roll-outs showing inconsistent amounts of results based on the inserted percentages. (FFM-4830)

#### October 25, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

* A potential race condition during initialization was detected in the Android SDK version 1.0.11. This issue has been resolved in version 1.0.12.

#### October 21, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

- Some accounts were not able to use failure strategies on their Feature Flags pipeline stages. We've fixed this bug and all accounts can now use failure strategies. (FFM-4844)
- On the Harness Platform, any Get Started with Feature Flag buttons will now take you directly to the first stage of the Get Started flow, instead of the Overview page. (FFM-4740)

#### October 20, 2022

##### What's new

This release does not include new features.

##### Early access

We've released a beta version of an Apex SDK for Feature Flags.

For more information and to access this SDK, see the Apex SDK reference guide and the GitHub repository.

##### Fixed issues

The Python server SDK has been updated to version 1.1.3. (FFM-4744)

* This fixes a bug where OR conditions in Target Groups were incorrectly treated as AND conditions. If you use Target Group functionality, make sure to upgrade to this latest version as soon as possible.

#### October 18, 2022

##### What's new

You can now add a default pipeline to your Feature Flags that will be applied when you add targeting rules, or when you enable or disable a Flag. This means that you can ensure your Flag changes go through the process you want them to, allowing for better security and more consistent operations. For example, you can add an approval step so all your production Flag changes must be approved before they are executed, or you can send a Slack notification every time a Flag changes.

For more information about how to use a default pipeline for your Flags, go to Add a Default Pipeline for Flag Changes.

##### Early access

This release does not include early access features.

##### Fixed issues

The Java Server SDK has been updated to version 1.1.5.2. (FFM-4744)

* This fixes a notable bug where Target Group evaluations with multiple attributes were not evaluated beyond the first listed attribute. If you use Target Group functionality, make sure to upgrade to this latest version as soon as possible.

#### October 5, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

* The Go SDK has been updated to version 0.1.3 to fix the SDK's internal dependencies. You do not need to take any action. (FFM-4678)

#### September 29, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

* The audit log for a Feature Flag previously didn't show human-friendly messages and did not log all changes, making it difficult to understand what was updated. This has now been fixed and the audit log shows easy to understand messages for all events including adding or removing a clause, or adding an item to the exclusion list. (FFM-4481)

#### September 26, 2022

##### What's new

For self-serve customers, you can now create and upgrade a Feature Flags subscription directly through the Harness Platform instead of contacting our Sales team, meaning you can manage your subscription quickly, securely, and at any time.

For information about the current plans you can subscribe to, go to Pricing & Plans. For more information about how to use subscriptions, go to Subscribe to Feature Flags.

##### Early access

This release does not include early access features.

##### Fixed issues

This release does not include fixed issues.

#### September 9, 2022

##### What's new

The Feature Flag PHP SDK has been released. This means you can now connect an application that uses PHP when using Harness Feature Flags.

For more information about the PHP SDK, go to the PHP Reference Guide. For information about Feature Flag SDKs, go to our SDK Overview.

To get the SDK, go to our PHP Git Repository.

##### Early access

This release does not include early access features.

##### Fixed issues

The Node.js SDK has been updated to version 1.2.8. (FFM-4494)

* This update fixed a bug that caused the SDK to unexpectedly shut down when a Target Group was deleted. This has been fixed and you can now deleted Target Groups without issue.

#### September 1, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

The .NET SDK has been updated to version 1.1.4. (FFM-4463)

* This update fixed a bug that occurred when running the SDK with the Relay Proxy in offline mode. This has been fixed and the SDK can now run the Relay Proxy in offline mode.

#### August 31, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

* The Python SDK has been updated to version 1.1.2 to update two of the dependencies in the SDK. For security purposes, please ensure to update the SDK to this version. (FFM-4425)

#### August 25, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

###### Feature Flag SDKs

The .NET SDK has been updated to version 1.1.3. Fixes in this update include:

- The package name for the SDK has changed from ff-netF48-server-sdk to ff-dotnet-server-sdk. To use this version, make sure you remove the old package name and use the new one.

- The sample app in the .NET SDK Git repository has been updated to the new version 1.1.3. (FFM-3651)

- The default configuration of the .NET SDK didn't have analytics enabled. (FFM-3520)

  This has been fixed and analytics is now set to true and enabled as default.

- When using the Relay Proxy with the .NET SDK, the URL for sending events was incorrect. (FFM-3652)

  The events URL has now been updated so it directs to the correct place.

- The .NET SDK README file has been updated to rename the Target data. (FFM-3759)

  The example Target data is now consistent across the sample code in the README and the SDK Reference Guide.

- The .NET SDK README file has updated to remove an extra period and a reference to debugging that was causing the example to fail. (FFM-4306)
  You can now run the example successfully.

- When evaluating Target Groups that used an IN operator, the SDK was only evaluating the first Target. (FFM-4358)
  The logic has now been fixed so that the SDK will check all values when an IN operator is used for a Target Group.

###### Relay proxy

* The proxy had a dependency on a JWT package that is no longer maintained. This fix updated the JWT dependency to a package that is maintained. (FFM-3867)
* The proxy had a dependency on ff-server, which is in a private repository. This fix removed the dependency on ff-server. (FFM-3965)
* Harness provided a tool to generate offline config files. For details, go to [Run the Relay Proxy in offline mode](/docs/feature-flags/ff-using-flags/relay-proxy/deploy-relay-proxy#run-the-relay-proxy-in-offline-mode) (FFM-3772)

#### August 18, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

**Feature Flags UI**

- When creating a stage on pipeline template, Name and Description fields were displayed . (FFM-4098)

  As these fields are not required for creating a stage using a template, they have been removed from the About your Stage screen. You will no longer be able to enter a name and description for stages on a Pipeline template, but note this applies to templates only.

- When using a Pipeline and configuring a Flag stage, only the first 15 Flags in your Project would appear as an option in the Select Flag menu. (FFM-3716)

  This has been fixed and you can now select any Flag in your Project.

**Feature Flag SDKs**

The Python SDK has been updated to Version 1.1.1. Fixes in this update include:

- Removing the type of Flag check on Prerequisite Flags. (FFM-3868)

  Previously, if you created a Multivariate Flag as a Prerequisite Flag, once you turned the Flag on you couldn't turn it off again. This bug has been fixed and you can now turn Flags with Multivariate Prerequisite Flags.

- The Node.js SDK has been updated to Version 1.2.7. Fixes in this update include:
  - When using conditions for Target Groups, and conditions were treated as or conditions, meaning some Targets were not selected. (FFM-4331)
    This has now been fixed and conditions are treated correctly.

#### August 8, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

**Feature Flags UI**

- On the Harness Platform, when no Environment had been added to a project, the tooltip for a Flag toggle was displaying HTML. (FFM-4094)

  This has been fixed to remove the raw HTML text.

- On the Harness Platform, when the value of a Variation was set as a long non-breaking string, the content on the left bar of the Flag detail page overflowed into the main content of the page. (FFM-4010)

  This has been fixed so that the value will now wrap correctly.

**Feature Flag SDKs**

The Go SDK has been updated to Version 0.1.2. Fixes in this update include:

- The polling interval is now measured in seconds instead of minutes. (FFM-3676)
  This means the interval is now 60 seconds, instead of 1 minute. If you are using the default configuration, there are no actions for you. If you configured the polling interval, you need to convert the configuration from minutes to seconds. For more information, see Configure the SDK in the Go SDK Reference Guide.
- A check has been added to ensure that when a Flag has nested Prerequisite Flags, the correct Variations are served. (FFM-4043)
  You can now turn off analytics using the Go SDK. For more information, see Configure the SDK in the Go SDK Reference Guide. (FFM-3677)

#### August 1, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

- During the Feature Flag Getting Started tutorial on the Harness Platform, some buttons displayed an extra + symbol. (FFM-4056)

  This has been fixed and the extra symbols have been removed.

- On the Feature Flags UI, when adding a Flag to a Target, some text boxes did not adjust to fit the full width of the table. (FFM-4055)

  This has now been fixed and the text boxes adjust as necessary.

#### July 27, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

* An issue where Flag Evaluations were always returning the default Variation in the Feature Flag Node.js SDK has been fixed. Previously, if the Target you sent to Evaluate against a Flag was part of a Target Group, the default Variation was always returned instead of the valid Variation for that Flag. This is now fixed and the correct Variation is returned for all Targets. (FFM-4175)

* Due to this fix, the Feature Flag Node.js SDK has been updated to version 1.2.6.

#### July 18, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

* On the Harness UI, when you deleted the Environment you were currently active in, the identifier for that Environment should have been removed from the URL but wasn't. (FFM-3984) This issue has been fixed and the Environment identifier is now removed from the URL when you delete an active Environment.

#### July 11, 2022

##### What's new

This release does not include new features.

##### Early access

This release does not include early access features.

##### Fixed issues

- On the Target and Target Group page UI, when there are no Flag rules added the layout is now correctly aligned and stretches to the full available height. (FFM-3931)

- On the Flags page UI, when you enter a search term that returns no results, the search bar is no longer cleared and you can use the Clear Search button. (FFM-3877)

- When filtering Flags and you receive more than a single page of results then reset the filter or select another filter, the page number is updated correctly. (FFM-3876)
- When editing a multivariate Flag that has two Variations, the trash icon is now displayed at the end of each Variation row. (FFM-3714)

- The Retry button displayed when there is an error now reloads the Flag endpoint instead of the Environment endpoint. (FFM-3713)

- On the Flag details page, the Save or Cancel footer now aligns correctly with the panel. (FFM-3712)

</details>
