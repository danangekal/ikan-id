import { baseApiUrlInternal, pathProduct } from 'constants/common';

export async function fetchGetProduct(params?: any): Promise<any> {
  const res = await fetch(`${baseApiUrlInternal}${pathProduct}${params}`);
  return res.json();
}

export async function fetchPostProduct(payload: any): Promise<any> {
  const res = await fetch(`${baseApiUrlInternal}${pathProduct}`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.json();
}

export async function fetchPutProduct(params: any, payload: any): Promise<any> {
  const res = await fetch(`${baseApiUrlInternal}${pathProduct}${params}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.json();
}

export async function fetchPatchProduct(
  params: any,
  payload: any,
): Promise<any> {
  const res = await fetch(`${baseApiUrlInternal}${pathProduct}${params}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.json();
}

export async function fetchDeleteProduct(params: any): Promise<any> {
  const res = await fetch(`${baseApiUrlInternal}${pathProduct}${params}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.json();
}
