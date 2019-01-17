# isMaintained-extension
Ever wondered if a GitHub project is actively maintained?

isMaintained is a Chrome extension that seamlessly indicates whether a GitHub project is actively maintained or not. To provide this information, we only install a small icon in the right side of a repository's page.

This icon (and its color) is used to inform the maintenance level a project, as follows:

* The project is under continuous maintenance. In this case, we classify the maintenance activity in three levels: high (green icon), fair (yellow icon) or borderline (orange icon). You can  also click on the icon to see the project's classification.

* The project is not under maintenance or is rarely maintained (red icon).

* A grey icon indicates the project is not analysed by isMaintained (for example, because it only contains documentation, only uses GitHub as a mirror, or not handle issues using GitHub).

### How it works
isMaintained relies on machine learning classifiers to predict the maintenance status of a GitHUb project. The classifiers are trained with several metrics about a project's maintenance activity over time, including number of commits, opened/merged pull requests, opened/closed issues, etc.

### About
isMaintained is a research prototype from the Applied Software Engineering Research Group, at the Federal University of Minas Gerais, Brazil. For more information, see this [paper](https://arxiv.org/abs/1809.04041).

Published @ https://chrome.google.com/webstore/detail/ismaintained/oeacpnaalfhjklghnocjfeecmminnhhd
