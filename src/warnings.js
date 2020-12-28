import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';

/*
  not using ts here.
*/

class Warnings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        /* proxy the call to avoid problems with CORS headers */
        var proxyUrl = process.env.REACT_APP_WARNINGS_PROXY_URL,
            targetUrl = process.env.REACT_APP_WARNINGS_URL;
        fetch(proxyUrl + targetUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...
                <Spinner animation="border" variant="info" />
            </div>;
        } else {
            return (
                <div>
                    <div><h3>Luikkausvaroitukset Oulussa vuonna 2020</h3></div>
                    <div>
                        <ListGroup>
                            {items
                                .filter(item => item.created_at.startsWith('2020'))
                                .sort(function (a, b) {
                                    return new Date(b.created_at) - new Date(a.created_at);
                                })
                                .map(item => (
                                    <ListGroup.Item key={item.created_at}>
                                        {item.city} {item.created_at}
                                    </ListGroup.Item>
                                ))}
                        </ListGroup>
                    </div>
                </div>
            );
        }
    }
}

export default Warnings;