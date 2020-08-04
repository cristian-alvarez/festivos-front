import { basePath, apiVersion } from "./config";

export function getHolidaysApi(limit, page) {
  const url = `${basePath}/${apiVersion}/get-holidays?limit=${limit}&page=${page}`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}

export function deleteHolidayApi(token, id) {
  const url = `${basePath}/${apiVersion}/delete-holiday/${id}`;

  const params = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}

export function addHolidayApi(token, post) {
  const url = `${basePath}/${apiVersion}/add-holiday`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(post)
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}

export function updateHolidayApi(token, id, data) {
  const url = `${basePath}/${apiVersion}/update-holiday/${id}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(data)
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}

export function getHolidayApi(urlPost) {
  const url = `${basePath}/${apiVersion}/get-holiday/${urlPost}`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}
