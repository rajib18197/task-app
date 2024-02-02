export default function TabsContentList({ activeTab }) {
  return (
    <div>
      <h2>Loaded Content</h2>
      <div>
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
}

function TabContent({ activeTab }) {
  return (
    <div>
      <h2>{activeTab.data}</h2>
      {activeTab.next && <TabContent activeTab={activeTab.next} />}
    </div>
  );
}
