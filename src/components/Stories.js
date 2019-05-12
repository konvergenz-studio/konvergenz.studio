import React from 'react';
import cx from 'classnames';

const STORY_WIDTH = 300;
const STORY_SWITCH_DELAY = 5000;
const STORY_INDEX_INCREMENT = 1;

export default class Stories extends React.PureComponent {
    constructor(props) {
        super(props);
        this.timer = 0;
        this.state = {
            currentStoryIndex: 0,
        };

        this.switchStory = this.switchStory.bind(this);
        this.renderStory = this.renderStory.bind(this);
        this.renderPagination = this.renderPagination.bind(this);
    }

    componentDidMount() {
        this.scheduleStorySwitch();
    }

    componentWillUnmount() {
        window.clearTimeout(this.timer);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.shallSwitchStory(prevState.currentStoryIndex)) {
            this.scheduleStorySwitch();
        }
    }

    shallSwitchStory(prevIndex) {
        const { currentStoryIndex } = this.state;

        if (this.isLastStoryByIndex(currentStoryIndex)) {
            return false;
        }

        return prevIndex !== currentStoryIndex;
    }

    scheduleStorySwitch() {
        this.timer = window.setTimeout(this.switchStory, STORY_SWITCH_DELAY);
    }

    switchStory() {
        this.setState({
            currentStoryIndex: this.getNextStoryIndex()
        });
    }

    isLastStoryByIndex(index) {
        return this.props.stories.length - STORY_INDEX_INCREMENT === index;
    }

    isCurrentStoryByIndex(index) {
        return this.state.currentStoryIndex === index;
    }

    getNextStoryIndex() {
        return this.state.currentStoryIndex + STORY_INDEX_INCREMENT;
    }

    getStoriesListIndex() {
        return this.state.currentStoryIndex * -STORY_WIDTH;
    }

    getStoriesListStyles() {
        return {
            width: STORY_WIDTH * this.props.stories.length,
            minHeight: STORY_WIDTH,
            left: this.state.currentStoryIndex * -STORY_WIDTH,
        };
    }

    getStoryStyles() {
        return { width: STORY_WIDTH };
    }

    renderStory(story, index) {
        const styles = this.getStoryStyles();
        const className =  cx('stories-story', {
            active: this.isCurrentStoryByIndex(index),
        });

        return (<span key={`story-${index}`} className={className} style={styles}>{story}</span>);
    }

    renderPagination(story, index) {
        const className = cx('stories-pagination', {
            active: this.isCurrentStoryByIndex(index),
        });

        return (<span key={`pagination-${index}`} className={className}></span>);
    }

    render() {
        return (
            <div className="stories" style={this.getStoryStyles()}>
                <div className="stories-list" style={this.getStoriesListStyles()}>
                    {this.props.stories.map(this.renderStory)}
                </div>
                {this.props.stories.map(this.renderPagination)}
            </div>
        );
    }
}
