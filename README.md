### Hexlet tests and linter status:
[![Actions Status](https://github.com/KristinaMalikova/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/KristinaMalikova/frontend-project-46/actions)

[![Node CI](https://github.com/KristinaMalikova/frontend-project-46/actions/workflows/jest-check.yml/badge.svg)](https://github.com/KristinaMalikova/frontend-project-46/actions/workflows/jest-check.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/dc96f227f3b2a760fb96/maintainability)](https://codeclimate.com/github/KristinaMalikova/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/dc96f227f3b2a760fb96/test_coverage)](https://codeclimate.com/github/KristinaMalikova/frontend-project-46/test_coverage)

## Описание

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

## Возможности утилиты:

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

## Установка:

- git clone
- make install

## Пример использования:

### Сравнение плоских файлов (.json)

```
$ gendiff filepath1.json filepath2.json
```

[![asciicast](https://asciinema.org/a/583094.svg)](https://asciinema.org/a/583094)

### Сравнение плоских файлов (.yml)

```
$ gendiff filepath1.yml filepath2.yml
```

[![asciicast](https://asciinema.org/a/583936.svg)](https://asciinema.org/a/583936)

### Сравнение файлов (.json, .yml, .yaml) с вложенной структурой в формате stylish

```
$ gendiff -f stylish filepath1.json filepath2.json
```
[![asciicast](https://asciinema.org/a/585229.svg)](https://asciinema.org/a/585229)

### Сравнение файлов (.json, .yml, .yaml) с вложенной структурой в формате plain

```
$ gendiff -f plain filepath1.json filepath2.json
```
[![asciicast](https://asciinema.org/a/585228.svg)](https://asciinema.org/a/585228)

### Сравнение файлов (.json, .yml, .yaml) с вложенной структурой в формате json

```
$ gendiff -f json filepath1.json filepath2.json
```
[![asciicast](https://asciinema.org/a/585227.svg)](https://asciinema.org/a/585227)

### Тестирование

```
$ make test
```

[![asciicast](https://asciinema.org/a/584963.svg)](https://asciinema.org/a/584963)