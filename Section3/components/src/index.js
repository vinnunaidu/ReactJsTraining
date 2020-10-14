import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = ()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 6:00 PM" 
                    message="Nice Blog Post!" 
                    avatar={faker.image.avatar()}/>    
            </ApprovalCard>
           <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:00 AM" 
                    message="Good Blog!" 
                    avatar={faker.image.avatar()}/>
            </ApprovalCard> 
           
           <ApprovalCard>
                 <CommentDetail 
                    author="Jane" 
                    timeAgo="Today at 4:00 PM" 
                    message="Fabulous!" 
                    avatar={faker.image.avatar()}/>
           </ApprovalCard>
           
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector("#root"));