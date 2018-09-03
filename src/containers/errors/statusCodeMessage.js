const type = "REQUEST_FAILED";

export const internalServerError = () => ({
    type,
    message: "Your request could not be completed. Check your connection or try again later"
})

export const unauthorized = (message) => ({
    error: {
        type,
        message
    }
});

export const badRequest = (message) => ({
    error: {
        type,
        message
    }
});

export const forbidden = (message) => ({
    error: {
        type,
        message
    }
});

export const modalError = (message) => ({
    error: {
        type,
        message
    }
});
