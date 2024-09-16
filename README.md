Add read
# cucumber_web_framework
**Introduction**
This is the RestApi test using Playwright, which is written in JavaScript.

**Prerequisite:**
**_Install the following:_**
_1) __VSCode IDE,__ 
_2) _NodeJS installed.___

**How to execute the project?**
At this stage, I believe most test engineers know how to clone a repo (execute this command to clone the repo, _git clone git@github.com:TestAccountSinawo/playwright_api_framework.git_). Once the project has been cloned, open it via VSCode by going to the **File**,  **open folder**, navigate to the project's root folder, and click **open**.

To execute the tests go to the project Terminal then type "npx playwright test". Once the tests are finished, the report gets created under "playwright-report". Inside the playwright-report folder there will be the default report named "index.html"
**GitHub Actions:**

The framework is built to also use GitHub Actions. I have added  a dir called .github/workflows/ and inside that path we have a .yml file that installs the required libs to run via cloud. You can track these GitHub actions under actions from the GitHub site which are triggered when the is a push from local to the repo.

These GitHub actions come quite handy if you do not have your machine at the time and you can just execute the action from your phone and get the results. You can also download the run from these actions and check the report from the path of the index.html or cucumber-report.html depending on your choice.

#Author: Mr. S. Qhaji