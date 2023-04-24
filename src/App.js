/* eslint-disable no-undef */
import "./App.css";
import { Tabs, TabItem, Text } from "@aws-amplify/ui-react";
import { NewReview } from "./ui-components";
import { Amplify, Auth } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure({
  Auth: {
    userPoolId: "us-east-2_qM6RsOvr0",
    userPoolWebClientId: "2tkvhvk5j1ktkpado1vhn6s7kt",
    region: "us-east-2",
  },
});

async function signOutAmp() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

function App() {
  return (
    <Authenticator>
      <div className="App">
        <Tabs>
          {/* Home Page*/}
          <TabItem title="Home">
            <header className="App-header">
              <div class="col mt-3">
                <div class="row">
                  <div class="card m-2">
                    <h3 class="card-title mt-4 m-3">Recent Reviews</h3>
                    <hr></hr>
                    <div class="card-body">
                      List of reviews will show up here
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </TabItem>

          {/* New Rating Page*/}
          <TabItem title="New Review">
            <header className="App-header">
              <div class="col mt-3">
                <div class="row">
                  <div class="card">
                    <h3 class="card-title mt-4">New Review</h3>
                    <hr></hr>
                    <div class="card-body">
                      <NewReview />
                    </div>
                  </div>
                </div>
               </div>
            </header>
          </TabItem>

          {/* Account Page */}
          <TabItem title="Account">
            <header className="App-header">
              <div class="col mt-3">
                <div class="row">
                  <div class="card m-2">
                    <h3 class="card-title mt-4 m-3">My Account</h3>
                    <hr></hr>
                    <div class="card-body">
                      
                    </div>
                  </div>
                  <div class="card m-2">
                    <h3 class="card-title mt-4 m-3">My Reviews</h3>
                    <hr></hr>
                    <div class="card-body">
                      .
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </TabItem>

          {/* Sign Out Button */}
          <TabItem title="Sign Out" color="red" onClick={signOutAmp}>
            <header className="App-header"></header>
          </TabItem>
        </Tabs>
      </div>
    </Authenticator>
  );
}

export default App;
