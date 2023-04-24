/* eslint-disable no-undef */
import "./App.css";
import { Tabs, TabItem, Button } from "@aws-amplify/ui-react";
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

function App() {
  return (
    <Authenticator>
      <div className="App">
        <Tabs>
          {/* Home Page*/}
          <TabItem title="Home">
            <header className="App-header">
              <h2>Welcome {Auth.currentAuthenticatedUser}</h2>
              {}
            </header>
          </TabItem>

          {/* New Rating Page*/}
          <TabItem title="New Review">
            <header className="App-header">
              <div class="card">
                <h3 class="card-title mt-4">New Review</h3>
                <hr></hr>
                <div class="card-body">
                  <NewReview />
                </div>
              </div>
            </header>
          </TabItem>

          {/* Account Page */}
          <TabItem title="Sign Out" onClick={Amplify.signOut}>
            <header className="App-header">
              <Button onClick={Auth.signOut}>
                Hello
              </Button>
            </header>
          </TabItem>
        </Tabs>
      </div>
    </Authenticator>
  );
}

export default App;
