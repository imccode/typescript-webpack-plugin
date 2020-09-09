export default async () => {
  if (window.a) {
    return Promise.resolve()
  }

  return Promise.reject()
}