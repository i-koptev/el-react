import React from "react"
import { Grid } from "@material-ui/core"
import CategoryItem from "./components/CategoryItem"

class CategoryList extends React.Component {
    constructor() {
        super()
        this.state = {
            categories: [
                {
                    title: "hats",
                    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
                    id: 1,
                    linkUrl: "hats",
                },
                {
                    title: "jackets",
                    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
                    id: 2,
                    linkUrl: "",
                },
                {
                    title: "sneakers",
                    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
                    id: 3,
                    linkUrl: "",
                },
                {
                    title: "womens",
                    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
                    size: "large",
                    id: 4,
                    linkUrl: "",
                },
                {
                    title: "mens",
                    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
                    size: "large",
                    id: 5,
                    linkUrl: "",
                },
            ],
        }
    }
    render() {
        return (
            <Grid container spacing={2}>
                {this.state.categories.map((category, index) => (
                    <CategoryItem
                        key={category.id}
                        title={category.title}
                        imageUrl={category.imageUrl}
                        categoryListLength={this.state.categories.length}
                        index={index}

                        // subtitle={category.subtitle}
                    />
                ))}
            </Grid>
        )
    }
}

export default CategoryList
