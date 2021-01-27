import axios from 'axios'



const axiosConf = {
    axiosURL: 'http://localhost:5000/upload',

    sendTicket: async function (file) {
        const formData = new FormData()
        formData.append('image', file, file.name)
        return await axios.post(this.axiosURL, formData)
            .then(res => res)
            .catch(err => err.json())
    }
}

export default axiosConf