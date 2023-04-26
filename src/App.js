/* eslint-disable no-undef */
import "./App.css";
import { Tabs, TabItem, SearchField } from "@aws-amplify/ui-react";
import { DormReview, Reviews } from "./ui-components";
import { Amplify, Auth } from "aws-amplify";
//import { Authenticator } from "@aws-amplify/ui-react";

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
    <div className="App">
      <Tabs>
        {/* Home Page*/}
        <TabItem title="Home">
          <header className="App-header">
            <h3 class="card-title mt-4 m-3">Recent Reviews</h3>
            <Reviews />
          </header>
        </TabItem>

        {/* New Rating Page*/}
        <TabItem title="New Review">
          <header className="App-header">
            <DormReview />
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
                  <div class="card-body">{}</div>
                </div>
                <div class="card m-2 inline">
                  <h3 class="card-title mt-4 m-3">My Reviews</h3>
                  <hr></hr>
                  <div class="card-body"></div>
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
  );
}

export default App;
