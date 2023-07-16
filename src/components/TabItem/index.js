import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabDetails, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickUpdateTab = () => {
    updateTabDetails(tabId)
  }
  const activeTabId = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabId}`}
        onClick={onClickUpdateTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
