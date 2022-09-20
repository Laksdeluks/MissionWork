import React from "react";
import Style from "../Styling/body.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';

export default function Body() {
  return (
    <div className="tinana">
      <div className="wahanga1">
        <div className="wh1">
          <h3>Humina</h3>
        </div>
        <div className="wah1">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="waha1">
          <p>
            He karakia tēnei i whakaakona ki a au i te wā i te kura au. He
            karakia hei timata i te ata, kia pai katoa tou rā.
          </p>
        </div>
      </div>
      <div className="wahanga2">
        <div className="wh2">
          <h3>Sbobnfj</h3>
        </div>
        <div className="wah2">
        <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="waha2">
          <p>
            This is a prayer that all children and teenagers do every morning to
            help them start with their day.
          </p>
        </div>
      </div>
      <div className="wahanga3">
        <div className="wh3">
          <h3>Ugufbdiu</h3>
        </div>
        <div className="wah3">
        <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="waha3">
          <p>
            He karakia tēnei i whakaakona ki a au i te wā i te kura au. He
            karakia hei timata i te ata, kia pai katoa tou rā.
            <br />
            Ina pirangi te rapu kōrero ano mo ngā karakia Māori
            <a href="https://teara.govt.nz/en/traditional-maori-religion-nga-karakia-a-te-maori/page-4">
              pā mai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
