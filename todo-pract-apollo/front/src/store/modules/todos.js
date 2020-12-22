import defaultClient from '../../graphql/defaultClient';
import createTodosStore from "../store-lib/createTodosStore";

export default createTodosStore({ defaultClient });
