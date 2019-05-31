import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {

  return (
    <div className="ui container comments">

      <ApprovalCard>
        Are you sure???
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          avitar={faker.image.avatar()}
          text="Hey look at this"
          time_ago="4 hrs ago"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          avitar={faker.image.avatar()}
          text="Over here!!!"
          time_ago="9 hrs ago"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          avitar={faker.image.avatar()}
          text="This is a blog post"
          time_ago="30 mins ago"
        />
      </ApprovalCard>

    </div>
  )
}

ReactDOM.render(<App />,
document.querySelector('#root')
);
