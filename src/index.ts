import { HandleRequest, HttpRequest, HttpResponse} from "@fermyon/spin-sdk"
import getStringArray from "./get-string-array"
import getValidWords from "./get-valid-words"

const encoder = new TextEncoder()

export const handleRequest: HandleRequest = async ({ uri }: HttpRequest): Promise<HttpResponse> => {
  const isValidRequest = uri.includes('?s=')
  const res: HttpResponse = { status: 200 }
  const words = isValidRequest ? getValidWords(getStringArray(uri)) : []
  res.body = encoder.encode(JSON.stringify(words)).buffer

  return res
}
