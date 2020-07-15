# FoxyCart Reset

To include in a FoxyCart Store

-   Under Templates - 1 Check "Add custom header and footer code to your templates". - 2 Add a `link` element with an href to the stylesheet. - You will need to get the current `raw.githubusercontent.com` to link properly. _Explanation [here](https://stackoverflow.com/questions/39065921/what-do-raw-githubusercontent-com-urls-represent#:~:text=The%20raw.githubusercontent.com%20domain,of%20the%20Homebrew%2Finstall%20repository.)_ - 3 Save the settings. - 4 Refresh the FoxyCart checkout page.

## How to develop

CAUTION

Updating this CSS will update all styles on all websites that use it. It is recommended to take from it what you need instead and use this as a main copy.

If there is a glaring error that all websites can benefit from:

-   1 Clone the repo to a local machine.
-   2 Make sure you have node and npm installed
-   3 Install dependencies with npm
-   4 Make the necessary changes in the Sass files
-   5 Confirm that the changes took effect in the command line and in the compiled CSS file.
