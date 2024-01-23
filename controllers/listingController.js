// const { Tea } = require('../models');

// const getTeaListing = async (req, res) => {
//     try {
//         const tea = await Tea.findByPk(req.params.id);
//         if (tea) {
//             res.render('productPage', tea.get({ plain: true }));
//         } else {
//             res.status(404).send('Product not found');
//         }
//     } catch (error) {
//         res.status(500).send('Server Error');
//     }
// };

// module.exports = {
//     getTeaListing,
// };
