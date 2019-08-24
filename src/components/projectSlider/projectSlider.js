import React, { Component } from "react";
import { Row, Col, CardHeader, CardLink, CardText, CardBody } from "reactstrap";

//Redux
import { getAllPublicRepos, getFilteredRepos } from "../../redux/actions/github";
import { connect } from "react-redux";

//Custom Components
import {
  ProjectCard,
  Carousel,
  SliderButton,
  TechBadge,
  TechBadgeHolder,
  CardBodyStyled
} from "./styles";

import { getElementsPerScreen } from"../../utilities/functions";


export class ProjectSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: 3
    };
  }

  componentWillMount() {
    this.setState({
      activeItemIndex: 0
    });
  }

  componentDidMount() {
    const { ...p } = this.props;
    p.getAllPublicRepos();
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate = () => {
    var showCards;
    showCards = getElementsPerScreen();
    this.setState({ cards: showCards });
  };

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    const { activeItemIndex } = this.state;
    const { ...p } = this.props;
    const rs = p.repoCollection;

    return (
      <>
        <Carousel
          numberOfCards={this.state.cards}
          gutter={12}
          showSlither={false}
          firstAndLastGutter={false}
          freeScrolling={false}
          requestToChangeActive={this.changeActiveItem}
          activeItemIndex={activeItemIndex}
          activePosition={"center"}
          chevronWidth={99}
          rightChevron={
            <SliderButton outline color="info" size="lg">
              {">"}
            </SliderButton>
          }
          leftChevron={
            <SliderButton outline color="info" size="lg">
              {"<"}
            </SliderButton>
          }
          outsideChevron={false}
        >
          {rs.map((item, index) => {
            let repoTech =
              item.language == null ? "Not Specified" : item.language;
            return (
              <Row>
                <Col sm="12" lg="2" md="4" style={{ textAlign: "center", marginTop: '5%' }}>
                  <ProjectCard key={index}>
                    <CardLink href={item.html_url} style={{ color: "#202A2E" }}>
                      <CardHeader>
                        <strong>{item.name}</strong>
                      </CardHeader>
                      <CardBodyStyled>
                        <CardText>
                          {item.description}
                        </CardText>
                      </CardBodyStyled>
                      <TechBadgeHolder>
                        {repoTech !== "Not Specified" && (
                          <h5>
                            <TechBadge color="info">{repoTech}</TechBadge>
                          </h5>
                        )}
                      </TechBadgeHolder>
                    </CardLink>
                  </ProjectCard>
                </Col>
              </Row>
            );
          })}
        </Carousel>
      </>
    );
  }
}

const mapStateToProps = state => ({
  repoCollection: state.github.repos
});

const mapDispatchToProps = {
  getAllPublicRepos, 
  getFilteredRepos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectSlider);
