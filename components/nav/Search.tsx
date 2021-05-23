export default function Search() {
  return (
    <div className="w-64 h-11 rounded-lg flex relative">
      <span className="absolute left-2 top-3.5">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9576 11.0171L15.8041 14.8637C16.0653 15.1216 16.0653 15.5461 15.8041 15.8041C15.5429 16.0653 15.1216 16.0653 14.8604 15.8041L11.0139 11.9608C9.85143 12.9143 8.36571 13.4857 6.74286 13.4857C3.01714 13.4857 0 10.4653 0 6.74286C0 3.02041 3.01714 0 6.74286 0C10.4653 0 13.4857 3.02041 13.4857 6.74286C13.4857 8.36571 12.911 9.85469 11.9576 11.0171ZM1.33878 6.74286C1.33878 9.72082 3.76163 12.1437 6.74286 12.1437C9.72082 12.1437 12.1469 9.72082 12.1469 6.74286C12.1469 3.7649 9.72082 1.33878 6.74286 1.33878C3.76163 1.33878 1.33878 3.7649 1.33878 6.74286Z" fill="white" />
        </svg>
      </span>
      <input placeholder="Search" className="bg-black-100 w-full h-full pl-9 text-white rounded-lg focus:outline-none" />
    </div>
  )
}