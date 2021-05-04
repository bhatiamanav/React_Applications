// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'; 
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create a react component
const App = () => {
    return (
       <div className="ui container comments">
           <ApprovalCard>
             <h3>WARNING!</h3>  
            <div>
               Are you sure you want to do this?
            </div>
           </ApprovalCard>
           
           <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" CommentText="Nice blog Post" avatar={faker.image.avatar()}/>
           </ApprovalCard>

           <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:00AM" CommentText="Really helpful in the research" avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>    
                <CommentDetail author="Jane" timeAgo="Yesterday at 8:55PM" CommentText="Awesome job!Keep up the good work" avatar={faker.image.avatar()} />
            </ApprovalCard>
       </div> 
    );
};


//Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);