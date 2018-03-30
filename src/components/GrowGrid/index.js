import React, {Component} from "react"
import Link from "gatsby-link"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import scrollToComponent from 'react-scroll-to-component';


class CloseChild extends React.Component {
  render() {
    return (
      <div
      id='closing'
      onClick={this.props.passedFunc}
      className="bl-icon bl-icon-close"></div>
    )
  }
}
class OpenChild extends React.Component {
  render() {
  return (
    <div
    className="">
    <h2
    className="bl-icon bl-icon-about"
    id={this.props.passedId} onClick={this.props.passedFunc}>
    {this.props.passedText}
    </h2>
    </div>
  )
  }
}
class ContentChild extends React.Component {
  render() {
  return (

    <div key={this.props.passedVal}
    className="bl-content"
    >
    <h2>Content</h2>
    <p>This responsive layout is based on an initial grid of four boxes. Once a box is clicked, it gets resized to fullscreen and the other boxes scale down and fade out. In the work section we experiment with another transition which is to show a panel by making it appear from the bottom while scaling the current one down. To see it in action, open the work section and click on one of the portfolio items and navigate through them.</p>
    </div>

  )
  }
}

class MainMenu extends Component {

  constructor () {
    super()
    this.state = {
      isHidden: true,
      targetId: null

    }
  }
  toggleHidden (e) {
    this.setState({
      isHidden: !this.state.isHidden,
      fieldVal: 'xxx',
      targetId: e.target.id
    })
    var anchor = 0;
    if(e.target.id === 'closing'){
    anchor = -100;
    }
    scrollToComponent(this.GrowGrid, { offset: anchor, align: 'middle', duration: 500, ease:'inCirc'});

  }
    render() {

        const data = this.props.menu.allWordpressWpApiMenusMenusItems.edges[0].node.items
        console.log(data)

        return (
          <div
          ref={(section) => { this.GrowGrid = section; }}
          id={this.props.mainId}
          className={this.state.isHidden !== true ? 'bl-main bl-expand-item' : 'bl-main'}
          >
                    {data.map((item) =>
                        <section key={item.object_slug}
                        className={this.state.targetId === item.object_slug ? 'bl-expand bl-expand-top' : 'bl-idle'}
                        >
                            <div className={this.props.passedVal !== true ? 'bl-box bl-box-expanded' : 'bl-box'}>

                            {this.state.isHidden && <OpenChild passedId={item.object_slug} passedText={item.title} passedFunc={this.toggleHidden.bind(this)} passedVal={this.state.isHidden} />}
                            {
                            !this.state.isHidden &&
                              <div>
                              <CloseChild passedFunc={this.toggleHidden.bind(this)} passedVal={this.state.isHidden} />
                              <ReactCSSTransitionGroup
                                      transitionName="cntshow"
                                      transitionAppear={true}
                                      transitionLeave={true}
                                      transitionEnterTimeout={100}
                                      transitionAppearTimeout={600}
                                      transitionLeaveTimeout={300}>
                              <ContentChild key={this.state.targetId} passedVal={this.state.targetId} />
                              </ReactCSSTransitionGroup>
                              </div>
                            }
                            </div>
                        </section>
                    )}

            </div>
        )
    }
}

export default MainMenu
