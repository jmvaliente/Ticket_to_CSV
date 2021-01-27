
export default function extract(data) {

    const ahorra = /.*[a-z] [0-9],[0-9][0-9]/gmi
    const array = data[0].data.data.split("\n")

    array.map(item => {
        if (item.toString().match(ahorra)) {
            const listItem = item.split(" ")
            console.log(item)
        }
    })
}