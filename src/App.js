import "./App.css";
import { Tabs, TabItem } from "@aws-amplify/ui-react";
import { NewReview } from "./ui-components";

let currUser = 'name';

try {
  const { user } = await Auth.signUp({ username, password });
  console.log(user);
} catch (error) {
  console.log('error signing up:', error);
}

function App() {
  return (
    <div className="App">
      <Tabs>
        {/* Home Page*/}
        <TabItem title="Home">
          <header className="App-header">
            <h2>Welcome {currUser}</h2>
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
        <TabItem title="Account">
          <header className="App-header">

          </header>
        </TabItem>
      </Tabs>
    </div>
  );
}

export default App;
