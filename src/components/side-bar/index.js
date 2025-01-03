import useStyles from "./side-bar.styles";
import paths from "../../router/paths";
import SectionItem from "./section-item";

const SideBar = () => {
  const cls = useStyles();

  const sections = [
    {
      items: [
        { path: paths.dashboard, title: "Dashboard", icon: null },
        { path: paths.products, title: "Products", icon: null },
        { path: paths.favorites, title: "Favorites", icon: null },
        { path: paths.inbox, title: "Inbox", icon: null },
        { path: paths.orderLists, title: "Order Lists", icon: null },
        { path: paths.productStock, title: "Product Stock", icon: null },
      ],
    },
    {
      title: "PAGES",
      items: [
        {
          path: paths.pricing,
          title: "Pricing",
          icon: null,
        },
      ],
    },
  ];

  return (
    <div className={cls.container}>
      <div className={cls.brandContainer}>
        <span className={cls.dash}>Dash</span>
        <span>Stack</span>
      </div>
      <div className={cls.sectionContainer}>
        {sections.map(({ items, title: sectionTitle }, index) => (
          <div key={index}>
            {sectionTitle && (
              <div className={cls.sectionTitleContainer}>
                <span className={cls.sectionTitle}>{sectionTitle}</span>
              </div>
            )}
            <div>
              {items.map(({ path, title }) => (
                <SectionItem key={path} path={path} title={title} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
