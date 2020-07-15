# FoxyCart Reset

To include in a FoxyCart Store

-   1 Under Templates
-   1 Check "Add custom header and footer code to your templates".
-   2 Add a `link` element with an href to the stylesheet. - You will need to use `cdn.jsdelivr.net` to get the current version of the file you need.
    -   _Explanation [here](https://stackoverflow.com/a/18049842)_
-   3 Save the settings.
-   4 Refresh the FoxyCart checkout page.

## How to develop

CAUTION

Updating this CSS will update all styles on all websites that use it. It is recommended to take from it what you need instead and use this as a main copy.

If there is a glaring error that all websites can benefit from:

-   1 Clone the repo to a local machine.
-   2 Make sure you have node and npm installed
-   3 Install dependencies with npm
-   4 Make the necessary changes in the Sass files
-   5 Confirm that the changes took effect in the command line and in the compiled CSS file.
