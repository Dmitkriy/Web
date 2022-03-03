PROGRAM GetParameter(INPUT, OUTPUT);
USES
  DOS;
VAR
  QueryString: STRING;
FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  StartPar, FinishPar: INTEGER;
BEGIN {Function}
  StartPar := POS(Key, QueryString);
  FinishPar := POS('&', QueryString);
  IF COPY(QueryString, FinishPar, 1) = '&'
  THEN
    BEGIN
      GetQueryStringParameter := COPY(QueryString, StartPar + LENGTH(Key) + 1, FinishPar - LENGTH(Key) - StartPar - 1);
      DELETE(QueryString, FinishPar, 1)
    END
  ELSE
    GetQueryStringParameter := COPY(QueryString, StartPar + LENGTH(Key) + 1)
END; {Function}
BEGIN {GetParameter}
  WRITELN('Contnet-Type: text/plain');
  WRITELN;
  QueryString := GetEnv('QUERY_STRING');
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END. {GetParameter}
