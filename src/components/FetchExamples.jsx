import React from 'react';
import { Container } from 'reactstrap';

class FetchExamples extends React.Component {
    //class object inside
    apiKey = "DlZu9uL7UKXrkVPtYAYfwp0nOPK8RBJf";
    url = `https://api.giphy.com/v1/gifs/random?api_key=${this.apiKey}`;

    constructor(props) {
        super(props);
        this.state = { gifData: "", message: "Not updated", count: 0}
    }
    //to get an image from the fetch use this notation

    //json?.data?.images?.fixed_height?.url
    handleFetch = async () => {
        try {
            const updatedCount = this.state.count +1;

            const response = await fetch(this.url)
            //convert response we can use
            const jsonData = await response.json()
            console.log(jsonData.data?.images?.fixed_height?.url)
            this.setState({
                gifData: jsonData.data?.images?.fixed_height?.url,
                count: updatedCount
            })
        } catch (e) {
            console.log(e)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.gifData !== this.state.gifData) {
            this.setState({message:"Component updated " + this.state.count})
        }
    }

    // componentDidMount() {
    //     this.handleFetch();
    // }

    render() {
        return (
            <Container>
                <h1>Hello from FetchExamples</h1>
                <p>{this.state.message}</p>
                <button onClick={this.handleFetch}>Get Random GIF</button>
                <br />
                <img src={this.state.gifData} alt="" style={{margin:"25px"}} />
            </Container>
        )
    }
}

export default FetchExamples;