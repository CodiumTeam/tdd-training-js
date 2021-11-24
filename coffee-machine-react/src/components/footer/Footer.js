import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import Button from '../buttons/Button';
import SmallButton from '../buttons/SmallButton';
import InsertCoin from '../coin/InsertCoin';

import './footer.css';
import 'react-responsive-modal/styles.css';

function Footer() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <footer>
      <Button text="See available components" onClick={onOpenModal} />
      <Modal open={open} onClose={onCloseModal} center>
        <h2>List of components</h2>
        <ButtonsBlock />
        <InsertCoinBlock />
      </Modal>
    </footer>
  );
}

function ButtonsBlock() {
  const noop = () => {};

  return (
    <div className="block">
      <h3>Buttons</h3>
      <h4>Button</h4>
      <div className="example">
        <Button text="This is a button" onClick={noop} />
      </div>
      <h5>Usage</h5>
      <pre>
        <p>
          <small>import Button from './components/buttons/Button';</small>
        </p>
        <code>
          &lt;Button text="This is a button" onClick=&#x2774;function&#x2775;
          /&gt;
        </code>
      </pre>
      <p>
        <small>Click event will send you the button text</small>
      </p>
      <h4>Small Button</h4>
      <div className="example">
        <SmallButton text="+" onClick={noop} />
      </div>
      <h5>Usage</h5>
      <p>
        <small>
          import SmallButton from './components/buttons/SmallButton';
        </small>
      </p>
      <pre>
        <code>
          &lt;SmallButton text="+" onClick=&#x2774;function&#x2775; /&gt;
        </code>
      </pre>
      <p>
        <small>Click event will send you the button text</small>
      </p>
    </div>
  );
}

function InsertCoinBlock() {
  return (
    <div className="block">
      <h3>Insert Coin</h3>
      <h4>InserCoin</h4>
      <div className="example">
        <InsertCoin />
      </div>
      <h5>Usage</h5>
      <p>
        <small>import InsertCoin from '../coin/InsertCoin';</small>
      </p>
      <code>&lt;InsertCoin onInsertedCoin=&#x2774;function&#x2775; /&gt;</code>
      <p>
        <small>onInsertedCoin event will send you the number of coins</small>
      </p>
    </div>
  );
}

export default Footer;
