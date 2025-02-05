# Radon IDE fork of Chrome DevTools UI

This repository is a fork of [The Chrome DevTools UI](https://github.com/ChromeDevTools/devtools-frontend) with modifications needed by the [Radon IDE project](https://github.com/software-mansion/radon-ide).

Please refer to the documentation from the main repo for install and build instructions.

In addition to the changes that are commited into the main `radon-ide` branch, we also distribute pre-build versions of the UI

## Making changes

In order to make changes you first need to setup this repo according [to the instructions provided on the Chromium project website](https://chromium.googlesource.com/devtools/devtools-frontend/+/main/docs/get_the_code.md).
Note that you'll need to checkout the repo inside `devtools` directory and you'll also need to install [depot_tools](https://www.chromium.org/developers/how-tos/install-depot-tools/) that are used by the setup and build process.

Once you are able to build the frontend, after modifying the sources, you can build artifacts Radon IDE will consume and commit them to the repo:

```
autoninja -C build_artifacts/RadonIDE
```
