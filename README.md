# Exchange Trading Platform

## Frontend

TODO

## Backend

### Setup

1. Install Docker.

1. In IntelliJ IDEA (Community Edition), open **be/etp-backend/pom.xml** as a Project and wait for progress bars in the lower-right to complete.

### Building and running from a clean slate (_e.g._ first time, or troubleshooting)

1. Right-click **pom.xml** and do Maven > Reload project, and wait for progress bars in the lower-right to complete. Afterward, make sure there are no errors (red underlines) in **pom.xml**. **What this does:** The dependencies listed in your **pom.xml** are downloaded from the Internet and cached in your home directory under **~/.m2/**. Sometimes this cache falls out of sync. This reloads the cache from scratch.

1. Do `mvn generate-sources`. **What this does:** This generates code in the **target/** directory. Sometimes this directory can get corrupted. When it doubt, just delete the entire **target/** directory and run this command again.

1. Do `mvn clean compile`. **Note:** This can be a little different from using the Compile or (Re)build options in the IntelliJ UI.

1. In the Project pane (tree view), right-click **Main** and Run. You should see something like _"Server started on port 8999."_ **Note:** Logs in red are not errors—they are logs coming in through external processes, _e.g._ a Docker container starting a MySQL image.

### Quick build and run

If you're not having any issues, during development you can skip all of the above and just Run Main (also accessible via the green-outline play button in the upper-right)—most of the time it will automatically recompile changes. If a change doesn't appear to have applied, go backwards in the above steps, _e.g._ try a `mvn clean compile` first, and if that doesn't work, then start from `mvn generate-sources`, etc.
