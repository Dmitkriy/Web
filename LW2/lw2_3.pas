PROGRAM Greeting(INPUT, OUTPUT);
USES
  DOS;
VAR
  Position: INTEGER;
  QueryString, Name: STRING;
BEGIN{Greeting}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  QueryString:= GetEnv('QUERY_STRING');
  Position := POS('name=', QueryString);
  IF (QueryString = '') OR (QueryString = 'name=')
  THEN
    WRITELN('Hello, Anonymous!');
  Name := COPY(QueryString, Position + 5);
  IF COPY(QueryString, 1, 5) = 'name='
  THEN
    IF Name <> ''
    THEN
      WRITELN('Hello, dear ', Name, '!')
END.{Greeting}

