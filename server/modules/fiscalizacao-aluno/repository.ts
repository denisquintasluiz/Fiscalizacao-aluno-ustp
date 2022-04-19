import * as mongoose from 'mongoose';
import FiscalizacaoSchema from './schema';

export default mongoose.model('fiscalizacaoalunos', FiscalizacaoSchema);
