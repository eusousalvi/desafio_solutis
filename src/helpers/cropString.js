export default function cropString(string, max) {
  return string.length > max ? `${string.slice(0, max)}...` : string;
}
