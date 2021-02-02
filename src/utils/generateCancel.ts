import axios, { AxiosRequestConfig } from 'axios';

// interface;

interface GenerateCancelToken {
    (): { cancel: Function; cancelToken: AxiosRequestConfig['cancelToken'] };
}
const generateCancelToken: GenerateCancelToken = () => {
    let cancel!: Function;
    const cancelToken = new axios.CancelToken((c: Function) => {
        cancel = c;
    });
    return {
        cancel,
        cancelToken,
    };
};
export default generateCancelToken;
