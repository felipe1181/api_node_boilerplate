'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{ cpf: '24-067-3955', cep: '68788-9833', nome: 'Starr', idade: 1, sexo: 'Feminino', telefone: '(936) 6964518', provider: 'PACIENTE', updated_at: '2019-10-31 23:19:13', created_at: '2019-07-31 09:53:57' },
      { cpf: '90-882-8737', cep: '43596-0002', nome: 'Gamble', idade: 2, sexo: 'Feminino', telefone: '(224) 7027722', provider: 'PACIENTE', updated_at: '2020-02-02 10:28:59', created_at: '2019-08-01 07:02:01' },
      { cpf: '69-640-3837', cep: '48951-4060', nome: 'Duthie', idade: 3, sexo: 'Feminino', telefone: '(938) 1579642', provider: 'PACIENTE', updated_at: '2020-04-23 02:51:53', created_at: '2019-12-05 04:47:36' },
      { cpf: '48-292-0921', cep: '27281-008', nome: 'Gobbett', idade: 4, sexo: 'Masculino', telefone: '(206) 7981032', provider: 'PACIENTE', updated_at: '2020-01-31 20:41:01', created_at: '2020-02-26 05:17:16' },
      { cpf: '17-334-4296', cep: '50988-173', nome: 'Ardling', idade: 5, sexo: 'Feminino', telefone: '(611) 4811728', provider: 'PACIENTE', updated_at: '2020-04-10 09:29:20', created_at: '2019-09-16 01:06:02' },
      { cpf: '70-154-3594', cep: '49349-566', nome: 'Bloxsum', idade: 6, sexo: 'Masculino', telefone: '(437) 5253163', provider: 'MEDICO', updated_at: '2020-04-08 06:03:09', created_at: '2019-07-10 00:46:46' },
      { cpf: '96-237-9553', cep: '10237-721', nome: 'Cohan', idade: 7, sexo: 'Feminino', telefone: '(571) 8239966', provider: 'MEDICO', updated_at: '2019-07-27 01:51:15', created_at: '2019-06-15 03:39:20' },
      { cpf: '28-669-1664', cep: '61852-637', nome: 'Fewster', idade: 8, sexo: 'Feminino', telefone: '(438) 4105067', provider: 'MEDICO', updated_at: '2019-09-28 21:19:56', created_at: '2019-11-07 17:28:54' },
      { cpf: '80-518-6996', cep: '51991-710', nome: 'Dossetter', idade: 9, sexo: 'Feminino', telefone: '(531) 3955371', provider: 'PACIENTE', updated_at: '2019-09-20 18:43:12', created_at: '2019-10-10 08:54:40' },
      { cpf: '98-064-4231', cep: '42291-711', nome: 'Knowling', idade: 10, sexo: 'Feminino', telefone: '(582) 2266273', provider: 'MEDICO', updated_at: '2020-03-09 11:03:37', created_at: '2019-11-23 15:17:38' },
      { cpf: '55-118-5831', cep: '67046-741', nome: 'Spiniello', idade: 11, sexo: 'Masculino', telefone: '(994) 8553825', provider: 'MEDICO', updated_at: '2019-12-18 17:08:21', created_at: '2020-01-30 18:59:30' },
      { cpf: '10-276-6227', cep: '76485-1048', nome: 'MacSporran', idade: 12, sexo: 'Masculino', telefone: '(917) 3656633', provider: 'MEDICO', updated_at: '2019-08-06 13:22:48', created_at: '2019-06-25 06:22:48' },
      { cpf: '86-273-0093', cep: '49884-931', nome: 'Tween', idade: 13, sexo: 'Masculino', telefone: '(164) 5890544', provider: 'PACIENTE', updated_at: '2019-10-05 06:30:54', created_at: '2019-10-07 09:02:30' },
      { cpf: '68-150-1180', cep: '66116-485', nome: 'Ovenden', idade: 14, sexo: 'Masculino', telefone: '(635) 2556777', provider: 'MEDICO', updated_at: '2019-08-17 07:55:16', created_at: '2020-03-02 19:15:37' },
      { cpf: '40-065-2713', cep: '62750-060', nome: 'McMurthy', idade: 15, sexo: 'Feminino', telefone: '(510) 3695956', provider: 'MEDICO', updated_at: '2019-08-07 20:12:28', created_at: '2020-04-15 16:26:35' },
      { cpf: '85-784-6419', cep: '0904-5764', nome: 'Gascone', idade: 16, sexo: 'Feminino', telefone: '(320) 6357883', provider: 'PACIENTE', updated_at: '2020-05-02 07:26:21', created_at: '2019-12-04 18:29:00' },
      { cpf: '92-726-8065', cep: '0132-0202', nome: 'Youthed', idade: 17, sexo: 'Feminino', telefone: '(489) 5674982', provider: 'MEDICO', updated_at: '2019-11-27 16:25:58', created_at: '2019-11-20 03:29:31' },
      { cpf: '44-836-1658', cep: '68001-007', nome: 'Tuddall', idade: 18, sexo: 'Feminino', telefone: '(757) 4852513', provider: 'PACIENTE', updated_at: '2020-05-03 01:39:56', created_at: '2019-10-01 12:23:37' },
      { cpf: '72-066-0670', cep: '65121-715', nome: 'Bushaway', idade: 19, sexo: 'Feminino', telefone: '(855) 9938342', provider: 'PACIENTE', updated_at: '2019-08-08 12:48:28', created_at: '2020-02-28 06:08:28' },
      { cpf: '22-126-5577', cep: '0615-7604', nome: 'Rushworth', idade: 20, sexo: 'Feminino', telefone: '(945) 9399759', provider: 'MEDICO', updated_at: '2019-05-16 03:54:38', created_at: '2019-05-20 20:06:52' },
      { cpf: '55-605-5903', cep: '65923-101', nome: 'Gauler', idade: 21, sexo: 'Masculino', telefone: '(765) 1462380', provider: 'MEDICO', updated_at: '2019-11-20 11:45:03', created_at: '2019-11-17 13:02:28' },
      { cpf: '88-026-8277', cep: '50458-308', nome: 'Spurdle', idade: 22, sexo: 'Feminino', telefone: '(961) 7399664', provider: 'PACIENTE', updated_at: '2019-11-04 01:17:06', created_at: '2020-04-21 11:00:10' },
      { cpf: '27-626-0260', cep: '52959-546', nome: 'Mauvin', idade: 23, sexo: 'Masculino', telefone: '(251) 3822445', provider: 'PACIENTE', updated_at: '2019-06-17 01:33:37', created_at: '2019-07-27 10:56:37' },
      { cpf: '92-816-2912', cep: '11118-1100', nome: 'Lighterness', idade: 24, sexo: 'Masculino', telefone: '(387) 9096316', provider: 'MEDICO', updated_at: '2019-12-17 20:11:42', created_at: '2019-11-18 16:47:26' },
      { cpf: '88-602-7577', cep: '54569-0396', nome: 'Khilkov', idade: 25, sexo: 'Feminino', telefone: '(699) 9052029', provider: 'PACIENTE', updated_at: '2019-07-18 17:52:18', created_at: '2020-01-19 09:37:28' },
      { cpf: '01-400-1766', cep: '63354-400', nome: 'Pollastrino', idade: 26, sexo: 'Feminino', telefone: '(352) 5161257', provider: 'MEDICO', updated_at: '2020-01-30 01:15:01', created_at: '2020-04-13 12:24:11' },
      { cpf: '71-456-9445', cep: '21695-437', nome: 'Bollis', idade: 27, sexo: 'Feminino', telefone: '(298) 3540470', provider: 'PACIENTE', updated_at: '2019-07-27 13:43:55', created_at: '2019-06-18 10:29:03' },
      { cpf: '32-036-0391', cep: '13537-535', nome: 'Vsanelli', idade: 28, sexo: 'Masculino', telefone: '(278) 1087429', provider: 'MEDICO', updated_at: '2019-06-27 14:04:46', created_at: '2019-08-20 12:53:44' },
      { cpf: '44-463-3270', cep: '54868-4232', nome: 'Pawlicki', idade: 29, sexo: 'Masculino', telefone: '(416) 5419158', provider: 'PACIENTE', updated_at: '2019-08-03 15:50:39', created_at: '2020-03-17 08:42:30' },
      { cpf: '11-626-3078', cep: '62654-231', nome: 'Baly', idade: 30, sexo: 'Masculino', telefone: '(298) 9791362', provider: 'PACIENTE', updated_at: '2020-01-01 11:27:33', created_at: '2019-12-14 04:35:03' }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
