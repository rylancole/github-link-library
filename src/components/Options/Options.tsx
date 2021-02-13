import * as React from 'react';
import { getPRs } from '../../api'
import './styles.scss';

const Options: React.FC = () => {
  const [text, setText] = React.useState("Loading . . .")
  
  getPRs().then((res) => setText(res));
  return (
    <div>
      {text}
    </div>
  );
};

export default Options;
