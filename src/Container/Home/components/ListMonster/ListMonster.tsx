import { ListGroup, Card, Accordion } from "react-bootstrap";

interface propes {
  monster_data: any;
}

const ListMonster = ({ monster_data }: propes) => {
  console.log("first monster");
  console.log(monster_data);
  return (
    <>
      {monster_data.length === 0 && <p>NO Monster</p>}
      <ListGroup>
        {monster_data.map((monster, index) => (
          <Accordion>
            <Accordion.Item eventKey={monster.id}>
              <Accordion.Header>{monster.name}</Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled mb-1-9">
                  <li className="mb-2 mb-xl-3 display-28">
                    <span className="display-26 text-secondary me-2 font-weight-600">
                      Username:
                    </span>{" "}
                    {monster.username}
                  </li>
                  <li className="mb-2 mb-xl-3 display-28">
                    <span className="display-26 text-secondary me-2 font-weight-600">
                      Company:
                    </span>{" "}
                    {monster.company.name}
                  </li>
                  <li className="mb-2 mb-xl-3 display-28">
                    <span className="display-26 text-secondary me-2 font-weight-600">
                      Email:
                    </span>{" "}
                    {monster.email}
                  </li>
                  <li className="mb-2 mb-xl-3 display-28">
                    <span className="display-26 text-secondary me-2 font-weight-600">
                      Website:
                    </span>{" "}
                    {monster.website}
                  </li>
                  <li className="display-28">
                    <span class="display-26 text-secondary me-2 font-weight-600">
                      Phone:
                    </span>{" "}
                    {monster.phone}
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <br />
          </Accordion>
        ))}
      </ListGroup>
    </>
  );
};

export default ListMonster;
