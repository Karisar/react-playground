import React from 'react';

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
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://liukastumisvaroitus-api.beze.io/api/v1/warnings?filter=city:Oulu'
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
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items
                        .filter(item => item.created_at.startsWith('2020'))
                        .sort(function (a, b) {
                            return new Date(b.created_at) - new Date(a.created_at);
                        })
                        .map(item => (
                            <li key={item.id}>
                                {item.city} {item.created_at}
                            </li>
                        ))}
                </ul>
            );
        }
    }
}

export default Warnings;