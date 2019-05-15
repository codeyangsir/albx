// 返回前台首页
exports.getIndexPage = (req,res) => {
    res.render('index.ejs')
}
exports.getDetailPage = (req,res) => {
    res.render('detail.ejs')
}
exports.getListPage = (req,res) => {
    res.render('list.ejs')
}
// 获取后台首页
exports.getAdminPage = (req,res) => {
    res.render('admin/index.ejs')
}
exports.getCategoriesPage = (req,res) => {
    res.render('admin/categories.ejs')
}
exports.getCommentsPage = (req,res) => {
    res.render('admin/comments.ejs')
}

exports.getLoginPage = (req,res) => {
    res.render('admin/login.ejs')
}
exports.getNavMenusPage = (req,res) => {
    res.render('admin/nav-menus.ejs')
}
exports.getPasswordResetPage = (req,res) => {
    res.render('admin/password-reset')
}
exports.getPostAddPage = (req,res) => {
    res.render('admin/post-add.ejs')
}
exports.getPostsPage = (req,res) => {
    res.render('admin/posts.ejs')
}
exports.getProfilePage = (req,res) => {
    res.render('admin/profile.ejs')
}
exports.getSettingsPage = (req,res) => {
    res.render('admin/settings.ejs')
}
exports.getSlidesPage = (req,res) => {
    res.render('admin/slides.ejs')
}
exports.getUsersPage = (req,res) => {
    res.render('admin/users.ejs')
}