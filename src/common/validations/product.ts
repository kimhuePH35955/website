import Joi from "joi";
export const ProductsJoiSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  count:Joi.string().required()
});
