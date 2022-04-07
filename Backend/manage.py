#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
import mysql.connector


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
    cnx = mysql.connector.connect(user='admin', password='easymed1212',
                                host='hospitals.cco6ycb236ib.us-east-1.rds.amazonaws.com',
                                database='hospitals')
    # cnx.create_table()
    cnx.close()
    # import ipdb; ipdb.set_trace()

if __name__ == '__main__':
    main()
