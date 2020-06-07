exports.onCreatePage = ({ page, actions }) => {
    if (page.path.match(/^\/dashboard/)) {
        // dashboard/anything will reroute to dashboard component
        page.matchPath = '/dashboard/*';
        actions.createPage(page);
    }
}
