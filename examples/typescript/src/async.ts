export default async (): Promise<unknown> => {
  if (window.name) {
    return Promise.resolve()
  }

  return Promise.reject()
}